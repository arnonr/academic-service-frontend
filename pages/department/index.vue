<template>
    <section class="portfolio__area pt-40 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-20">
                    <div class="" v-if="selectOptions.departments.length != 0">
                        <v-select
                            label="title"
                            placeholder="หน่วยงาน"
                            :options="selectOptions.departments"
                            v-model="search.department_id"
                            class="form-control v-select-no-border"
                            :clearable="true"
                        ></v-select>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" v-if="items.length != 0">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="blog__list-item-wrapper">
                                <div class="row gx-2 grid">
                                    <NewsListItem
                                        v-for="(it, i) in items"
                                        :key="i"
                                        class="col-xxl-3 col-xl-3 col-lg-6 col-md-6"
                                        :item="{
                                            link: 'department/',
                                            id: it.id,
                                            title: it.name_th,
                                            file: it.department_file,
                                        }"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-12">
                            <div class="tp-pagination mt-30">
                                <blog-pagination
                                    :totalPage="totalPage"
                                    :currentPage="currentPage"
                                    @update:currentPage="currentPage = $event"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
// Import
import NewsListItem from "~/components/list/DepartmentGridItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
// Variable
const route = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const items = ref([]);
const perPage = ref(12);
const currentPage = ref(1);
const totalPage = ref(1);
const totalItems = ref(0);
const search = ref({
    department_id: null,
    service_category_id: null,
    title: "",
    created_year: null,
    created_month: null,
    is_publish: 1,
    text_all: "",
});

const selectOptions = ref({
    news_types: [],
    perPage: [
        { title: "20", value: 20 },
        { title: "40", value: 40 },
        { title: "60", value: 60 },
    ],
    service_categories: [],
    departments: [],
});

//

// Function Fetch
const { data: resDepartment } = await useAsyncData("Department", async () => {
    let data = await $fetch(`${runtimeConfig.public.apiBase}/department`, {
        params: {
            is_publish: 1,
            lang: useCookie("lang").value,
        },
    });

    return data;
});

selectOptions.value.departments = resDepartment.value.data.map((e) => {
    return { title: e.name_th, value: e.id };
});

if (route.query.page) {
    currentPage.value = route.query.page;
}

const { data: res } = await useAsyncData("department", async () => {
    let params = {
        ...search.value,
        id:
            search.value.department_id == null
                ? undefined
                : search.value.department_id.value,
        created_year:
            search.value.created_year == null
                ? undefined
                : search.value.created_year.value,
        created_month:
            search.value.created_month == null
                ? undefined
                : search.value.created_month.value,
        perPage: perPage.value,
        currentPage: currentPage.value,
        lang: useCookie("lang").value,
    };

    let data = await $fetch(`${runtimeConfig.public.apiBase}/department`, {
        params: params,
    });
    items.value = data.data;
    totalPage.value = data.totalPage;
    totalItems.value = data.totalData;
    return data;
});

items.value = res.value.data;
totalPage.value = res.value.totalPage;
totalItems.value = res.value.totalData;

watch(
    [currentPage, search.value],
    () => {
        router.replace({
            name: "department",
            query: { page: currentPage.value },
        });
        refreshNuxtData("department");
    },
    { deep: true }
);

onMounted(() => {});

watchEffect(() => {
    if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value;
});

// watch([res], () => {
//   items.value = res.value.data;
// });

// watch([resNewsType], () => {
//   newsType.value = resNewsType.value.data;
// });

useHead({
    title: "งานบริการวิชาการ",
});

definePageMeta({
    middleware: "auth",
});
</script>

<style scoped></style>

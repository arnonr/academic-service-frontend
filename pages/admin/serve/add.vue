<template>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <div class="breadcrumb__list">
                            <span> ผู้ดูแลระบบ </span>
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span>
                                <NuxtLink href="/admin/serve">
                                    รายการการให้บริการ
                                </NuxtLink></span
                            >
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> เพิ่มข้อมูล </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio__area pt-40 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h4>แบบฟอร์มเพิ่มข้อมูล</h4>
                </div>

                <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
                    <h4>
                        <i class="fa-solid fa-edit"></i>
                        <span class="ml-10">ภาษาไทย</span>
                    </h4>
                </div>

                <div class="col-12">
                    <div class="card" style="border: none">
                        <div class="card-body">
                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span>หน่วยงาน
                                    :
                                </label>
                                <div class="col-sm-9">
                                    <v-select
                                        label="title"
                                        placeholder="หน่วยงาน"
                                        :options="selectOptions.departments"
                                        id="slt-member-status"
                                        v-model="item.department_id"
                                        class="form-control v-select-no-border"
                                        :clearable="true"
                                    ></v-select>
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span
                                    >ประเภทการบริการวิชาการ :
                                </label>
                                <div class="col-sm-9">
                                    <v-select
                                        label="title"
                                        placeholder="ประเภทการบริการวิชาการ"
                                        :options="
                                            selectOptions.service_categories
                                        "
                                        id="slt-member-status"
                                        v-model="item.service_category_id"
                                        class="form-control v-select-no-border"
                                        :clearable="true"
                                    ></v-select>
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span>รูปภาพปก
                                    :
                                </label>
                                <div class="col-sm-9">
                                    <input
                                        ref="file"
                                        class="form-control"
                                        type="file"
                                        id="formFile"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span>หัวข้อ :
                                </label>
                                <div class="col-sm-9">
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        id="txt-organization"
                                        v-model="item.title_th"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span
                                    >รายละเอียด :
                                </label>
                                <div class="col-sm-9">
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.detail_th"
                                            v-model="item.detail_th"
                                        ></froala>

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span
                                    >อัตราค่าใช้บริการ :
                                </label>
                                <div class="col-sm-9">
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.rates_th"
                                            v-model="item.rates_th"
                                        ></froala>

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span>สถานที่ :
                                </label>
                                <div class="col-sm-9">
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.location_th"
                                            v-model="item.location_th"
                                        ></froala>

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span
                                    >ข้อมูลติดต่อ :
                                </label>
                                <div class="col-sm-9">
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.contact_th"
                                            v-model="item.contact_th"
                                        ></froala>

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span>สถานะ :
                                </label>
                                <div class="col-sm-9">
                                    <v-select
                                        label="name_th"
                                        placeholder="การเผยแพร่"
                                        :options="selectOptions.publishes"
                                        id="slt-is_publish"
                                        v-model="item.is_publish"
                                        class="form-control v-select-no-border"
                                        :clearable="true"
                                    ></v-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
                    <h4>
                        <i class="fa-solid fa-edit"></i>
                        <span class="ml-10">English</span>
                    </h4>
                </div>

                <div class="col-12">
                    <div class="card" style="border: none">
                        <div class="card-body">
                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    >หัวข้อ :
                                </label>
                                <div class="col-sm-9">
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        id="txt-organization"
                                        v-model="item.title_en"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    >รายละเอียด:
                                </label>
                                <div class="col-sm-9">
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.detail_en"
                                            v-model="item.detail_en"
                                        ></froala>

                                        <div id="detail-en"></div>
                                    </client-only>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 mt-20">
                    <div class="contact__btn-2 text-center">
                        <button class="btn btn-warning" @click="onSubmit">
                            Submit
                        </button>
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
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import booking_data from "~~/mixins/bookingData";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

// Variable
const runtimeConfig = useRuntimeConfig();
const router = useRouter();

const item = ref({
    title_th: null,
    title_en: null,
    department_id: null,
    service_category_id: null,
    detail_th: "",
    detail_en: "",
    is_publish: {
        id: 1,
        value: 1,
        name_th: "publish",
        name_en: "publish",
        color: "success",
    },
    rates_th: "",
    rates_en: "",
    location_th: "",
    location_en: "",
    contact_th: "",
    contact_en: "",
});
const file = ref(null);

const selectOptions = ref({
    publishes: booking_data.data().publishes,
    departments: [],
    service_categories: [],
});

const format = (date) => {
    const day = dayjs(date).locale("th").format("DD");
    const month = dayjs(date).locale("th").format("MMM");
    const year = date.getFullYear() + 543;

    return `${day} ${month} ${year}`;
};

const r = (Math.random() + 1).toString(36).substring(7);

let config = {};

config["detail_th"] = booking_data.data().froala_config();
config["detail_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.detail_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.detail_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.detail_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.detail_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.detail_th);
    },
};

config["detail_en"] = booking_data.data().froala_config();
config["detail_en"]["events"] = {
    keyup: function (inputEvent) {
        item.value.detail_en = this.html.get();
    },
    click: function (clickEvent) {
        item.value.detail_en = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.detail_en = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.detail_en = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.detail_en);
    },
};

//
config["rates_th"] = booking_data.data().froala_config();
config["rates_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.rates_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.rates_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.rates_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.rates_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.rates_th);
    },
};

config["rates_en"] = booking_data.data().froala_config();
config["rates_en"]["events"] = {
    keyup: function (inputEvent) {
        item.value.rates_en = this.html.get();
    },
    click: function (clickEvent) {
        item.value.rates_en = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.rates_en = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.rates_en = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.rates_en);
    },
};

config["location_th"] = booking_data.data().froala_config();
config["location_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.location_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.location_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.location_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.location_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.location_th);
    },
};

config["location_en"] = booking_data.data().froala_config();
config["location_en"]["events"] = {
    keyup: function (inputEvent) {
        item.value.location_en = this.html.get();
    },
    click: function (clickEvent) {
        item.value.location_en = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.location_en = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.location_en = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.location_en);
    },
};

config["contact_th"] = booking_data.data().froala_config();
config["contact_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.contact_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.contact_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.contact_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.contact_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.contact_th);
    },
};

config["contact_en"] = booking_data.data().froala_config();
config["contact_en"]["events"] = {
    keyup: function (inputEvent) {
        item.value.contact_en = this.html.get();
    },
    click: function (clickEvent) {
        item.value.contact_en = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.contact_en = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.contact_en = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.contact_en);
    },
};

// Function Fetch
const fetchDepartments = async () => {
    let data = await $fetch(`${runtimeConfig.public.apiBase}/department`, {
        params: {
            is_publish: 1,
        },
    }).catch((error) => error.data);

    selectOptions.value.departments = data.data.map((e) => {
        return { title: e.name_th, value: e.id };
    });
};

const fetchServiceCategories = async () => {
    let data = await $fetch(
        `${runtimeConfig.public.apiBase}/service-category`,
        {
            params: {
                is_publish: 1,
            },
        }
    ).catch((error) => error.data);

    selectOptions.value.service_categories = data.data.map((e) => {
        return { title: e.name_th, value: e.id };
    });
};

// Event
const onSubmit = async () => {
    console.log(item.value);
    //   if (
    //     item.value.is_publish == null ||
    //     item.value.is_publish.id == null ||
    //     item.value.service_category_id == null ||
    //     item.value.name_th == "" ||
    //     item.value.name_th == null ||
    //     item.value.detail_th == "" ||
    //     item.value.detail_th == null
    //   ) {
    //     useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
    //     return;
    //   }

    let type_object = {
        text_success: "เพิ่มรายการเสร็จสิ้น",
        method: "post",
        url: runtimeConfig.public.apiBase + "/serve/",
    };

    let data = {
        ...item.value,
        serve_file: file.value.files != null ? file.value.files[0] : null,
        is_publish: item.value.is_publish.value,
        department_id:
            item.value.department_id == null
                ? undefined
                : item.value.department_id.value,
        service_category_id:
            item.value.service_category_id == null
                ? undefined
                : item.value.service_category_id.value,
        created_serve: dayjs().format("YYYY-MM-DD"),
    };

    var form_data = new FormData();
    for (var key in data) {
        form_data.append(key, data[key]);
    }

    await $fetch(type_object.url, {
        method: type_object.method,
        body: form_data,
    })
        .then((res) => {
            if (res.msg == "success") {
                useToast(type_object.text_success, "success");
                router.push({ path: "/admin/serve/" });
            } else {
                throw new Error("ERROR");
            }
        })
        .catch((error) => error.data);
};

onMounted(() => {
    fetchDepartments();
    fetchServiceCategories();
});

useHead({
    title: "เพิ่มการให้บริการ",
});
</script>

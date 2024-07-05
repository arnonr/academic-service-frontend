<template>
  <HomeBanner />
  <HomeCategory />
  <HomeNews />
</template>

<script setup>
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

useHead({
  title:
    "งานบริการวิชาการ มจพ.",
  meta: [
    {
      name: "งานบริการวิชาการ มจพ.",
      content: "งานบริการวิชาการ มจพ.",
    },
  ],
});

if (process.client) {
  if (localStorage.getItem("login")) {
    useToast("เข้าสู่ระบบเสร็จสิ้น", "success");
    localStorage.removeItem("login");
  }
}

definePageMeta({
  middleware: "auth",
});
</script>

<template>
    <div class="companies w-100">
        <h1>This is an companies page</h1>
        <CompaniesList/>
    </div>
</template>

<script>
import CompaniesList from "@/components/companies/CompanyList.vue";

export default {
    name: "CompaniesView",
    components: {CompaniesList},
};
</script>

<style scoped></style>

<style scoped>
body .p-datatable .p-datatable-thead > tr > th {
  background: #969696 !important;
}
</style>
<template>
  <div>
    <h5>Arriving Methods</h5>
    <Fieldset legend="Show Tab" :toggleable="true">
      <Button
        label="Add New"
        class="p-button-secondary"
        @click="$router.push('/AddNewArrivingMethod')"
      />

      <DataTable
        :value="dataList"
        :resizableColumns="true"
        columnResizeMode="fit"
        :paginator="true"
        :rows="3"
        showGridlines
        responsiveLayout="scroll"
      >
        <Column field="id" header="Code"></Column>
        <Column field="arrivingArabicName" header="Arabic Name"></Column>
        <Column field="arrivingEnglishName" header="English Name"></Column>
        <Column field="sort" header="sort"></Column>
        <Column columnKey="actions">
          <template #body="slotProps">
            <Button
              @click="Delete(slotProps.data.id)"
              icon="p-button-danger"
              label="Delete"
            ></Button>
            <Button label="Success"  @click="EditArriving(slotProps.data)" class="p-button-success" />

          </template>
        </Column>
      </DataTable>
    </Fieldset>

    <ConfirmPopup></ConfirmPopup>
  </div>
</template>

<script>
import http from "../../http-common.js";

import ConfirmPopup from "primevue/confirmpopup";

import Toast from "primevue/toast";

export default {
  name: "Branches_Setup",
  data() {
    return {
      dataList: [],
    };
  },
  components: {
    ConfirmPopup,
    Toast,
  },

  methods: {
    GetAllArrivingMethods() {
      debugger;
      http()
        .get(
          "http://40.127.194.127:777/api/Emergency/GetAllArrivingMethods?first=0&page=0&rows=10"
        )
        .then((result) => {
          debugger;
          this.dataList = result.data.data;
        })
        .catch((err) => {
          reject(err);
        });
    },

    Delete(id) {
      this.$alert("Are you sure");
      debugger;
      http()
        .post(
          "http://40.127.194.127:777/api/Emergency/DeleteArrivingMethod",
          id
        )
        .then((result) => {
          debugger;
          this.GetAllArrivingMethods();
          if (result.data.success == true) {
            this.$toast.add({
              severity: "success",
              summary: result.data.message,
              life: 3000,
            });
          } else {
          }
        });

      
    },
    EditArriving(data){
localStorage.setItem("data",JSON.stringify(data));
this.$router.push('/AddNewArrivingMethod?id='+data.id);

    }
  },
    created() {},
    mounted() {
      this.GetAllArrivingMethods();
    },
  
};
</script>

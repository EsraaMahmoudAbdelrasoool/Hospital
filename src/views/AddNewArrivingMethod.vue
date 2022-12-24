<template>
  <div>
    <h5>Add New arriving</h5>
    <ul>
      <li v-for="item in error" v-bind:key="item">
      {{ item }} in valid
      </li>
    </ul>
    <Fieldset legend="Add Or Edit">
      <div
        class="model fade"
        id="exampleModel"
        tabindex="1"
        aria-labelledby="exampleModelLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
            
            </div>
            <div class="modal-body">
              <form @click.prevent>
                <div class="row g-3 align-items-center">
                  <div class="col-auto d-block mx-auto">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="arriveingArabicName"
                      v-model="body.arrivingArabicName"
                    />
                    <span
                      class="error-feedback"
                      v-if="body.arrivingArabicName == ''"
                    >
                      {{ ArabicNameerrormessage }}
                    </span>
                  </div>
                </div>
                <br />
                <div class="row g-3 align-items-center">
                  <div class="col-auto d-block mx-auto">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="arriveingEnglishName"
                      v-model="body.arrivingEnglishName"
                    />
                    <span
                      class="error-feedback"
                      v-if="body.arrivingEnglishName == ''"
                    >
                      {{ EnglishNameerrormessage }}
                    </span>
                  </div>
                </div>
                <br />
                <div class="row g-3 align-items-center">
                  <div class="col-auto d-block mx-auto">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="sort"
                      v-model="body.sort"
                    />
                  </div>
                </div>
                <br />
              </form>
            </div>
            <div class="modal-footer">
              <Button
                label="Save"
                icon="pi pi-check"
                @click="AddOrUpdateArrivingMethod()"
                :loading="isLoading"
              />
              <Button
                label="Back"
                @click="$router.push('/ArrivingList')"
                class="p-button-warning"
              />
            </div>
          </div>
        </div>
      </div>
    </Fieldset>
  </div>
</template>

<script>
import http from "../../http-common.js";

export default {
  name: "Addnewarriving",
  data() {
    return {
      body: {
         id: 0,
        arrivingEnglishName: "",
        arrivingArabicName: "",
        sort: "",
      },
      successmassage: "",
      ArabicNameerrormessage: "*",
      EnglishNameerrormessage: "*",
      error:[]
    };
  },

  mounted() {
    debugger
    if(this.$route.query.id !=undefined)
    this.body= JSON.parse(localStorage.getItem('data'));
  },
  methods: {
    AddOrUpdateArrivingMethod() {
      this.error=[]
      for(const item in this.body)
      {
        if (this.body[item] !=null && (this.body[item] ==="" || this.body[item].length===0) && item !="id" && item !="accountId")
        {
          this.error.push(item)
        }
      }
      if(this.error.length===0){
        

      debugger;
      http()
        .post(
          "http://40.127.194.127:777/api/Emergency/AddOrUpdateArrivingMethod",
          this.body
        )
        .then((result) => {
          debugger;
          if (result.data.success == true) {
             alert("Date has been saved")
            this.$router.push('/ArrivingList');
            this.$toast.add({
              severity: "success",
              summary: result.data.message,
              life: 3000,
            });
                     

          } else {
          }
        })
        .catch((err) => {
          reject(err);
        });
      }
    },
  },
  resetData() {
    this.body = {
      arrivingEnglishName: "",
      arrivingArabicName: "",
      sort: "",
    };
  },
};
</script>

<style></style>

<template>
  <loader :loading="loading" />

  <div v-if="!loading && tableData.items[0].length" class="card bg-transparent mt-4">

    <div class="card-header p-0">
      <div class="d-flex justify-content-between align-items-center my-3">
        <div class="mb-0 align-self-center text-secondary">
          <p class="text-sm ">
            Showing <span>{{ pmeta.firstItem }}- {{ pmeta.lastItem }} of {{ pmeta.total }} Records</span>
          </p>
        </div>
        <div v-if="tableData.unique.right" class="total text-secondary"> Balance: {{ $filters.formatNumber(walletBalance)
          ||
          '0.00' }}
        </div>
      </div>
    </div>

    <div class="table-responsive mt-1">
      <form action="#" method="post" enctype="multipart/form-data" id="form-auctions" class="is-filled">

        <input type="hidden" name="_method" value="DELETE">
        <table class="table table-flush dataTable-table  align-items-center mb-0">
          <thead>
            <tr>

              <th data-sortable="" class="desc" v-for="(h, index) in tableData.items[0][0]" :key="index">
                <a href="#" class="dataTable-sorter">
                  <h6 class="mb-0 text-xs">
                    {{ index }}
                  </h6>
                </a>
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(h, index) in tableData.items[0]" :key="index">
              <td v-for="(td, i) in h" :key="i" class="">
                <div class="align-middle  text-sm">
                  <h6 class="mb-0 text-xs">{{ td }}</h6>
                </div>
              </td>

              <td v-if="tableData.unique.show">
                <a :href="tableData.meta.urls[index].url" data-bs-toggle="tooltip" data-bs-original-title="Preview order">
                  <i class="material-symbols-outlined text-secondary position-relative text-lg">preview</i>
                </a>
              </td>

            </tr>

          </tbody>
        </table>
      </form>
    </div>
    <div class="card-footer">
      <div class=" d-flex justify-content-end  mt-3">
        <div class="results ">
          <div v-if="pmeta.total > pmeta.per_page" class="pagination-wraper">
            <div class="pagination">
              <ul class="pagination-numbers">
                <pagination :useUrl="true" :meta="pmeta" @pagination:switched="handlePagination" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="!loading && !tableData.items[0].length" class="card  bg-dark mt-4">

    <div class="row justify-content-center">
      <div class="col-6 col-sm-4 col-md-3 col-lg-12">
        <div href="#" class="icon-box nounderline text-center p-5">
          <i class=""></i>
          <h5 class="porto-sicon-title mx-2">No transaction yet</h5>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { useActions, useGetters } from "vuex-composition-helpers";
import Pagination from "../pagination/Pagination";
import Loader from "../utils/Loader";

export default {
  props: ["url", "reload"],
  components: {
    Pagination,
    Loader,
  },
  setup() {
    const { tableData, pmeta, walletBalance } = useGetters([
      "tableData",
      "pmeta",
      "walletBalance",
    ]);
    const { getTableData, getWalletBalance } = useActions([
      "getTableData",
      "getWalletBalance",
    ]);

    const loading = ref(true);

    onMounted(() => {
      loading.value = true;
      getTableData(location.href + "?get=1")
        .then((res) => {
          console.log(res);
          loading.value = false;
        })
        .catch(() => {
          loading.value = false;
        });
      // getWalletBalance();
    });

    function handlePagination(page) {
      getTableData(location.href + "?page=" + page);
    }

    return {
      tableData,
      getTableData,
      handlePagination,
      pmeta,
      walletBalance,
      getWalletBalance,
      loading,
    };
  },
};
</script>
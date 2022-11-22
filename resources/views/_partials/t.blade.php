@if ($collections['items'][0]->count())

<div class="card">
    <div class="card-header">
        <div class="d-flex align-items-center mt-3">
            <div class="mb-0 align-self-center">
                <p class="text-sm text-gray-700 leading-5">
                    {!! __('Showing') !!}
                    @if ($pagination->firstItem())
                    <span class="font-medium">{{ $pagination->firstItem() }}</span>
                    {!! __('to') !!}
                    <span class="font-medium">{{ $pagination->lastItem() }}</span>
                    @else
                    {{ $pagination->count() }}
                    @endif
                    {!! __('of') !!}
                    <span class="font-medium">{{ $pagination->total() }}</span>
                    {!! __('results') !!}
                </p>
            </div>
        </div>
    </div>
    <div class="table-responsive mt-1">
        <form action="#" method="post" enctype="multipart/form-data" id="form-auctions" class="is-filled"><input type="hidden" name="_token" value="PYlFxXUwxavupF6J09OR8TWqPrEQH8ciyislr1wH"> <input type="hidden" name="_method" value="DELETE">
            <table class="table table-flush dataTable-table  align-items-center mb-0">
                <thead>
                    <tr>

                        <th data-sortable="" class="desc " v-for="(h, index) in tableData.items[0][0]" :key="index">
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
                                <h6 class="mb-0 text-xs">{{ td }}
                                </h6>
                            </div>
                        </td>

                        <td v-if="tableData.meta.show">
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
                {{ $pagination->links() }}
            </div>

        </div>
    </div>



</div>

@else
<div class="card">
    @include('_partials.empty')
</div>

@endif
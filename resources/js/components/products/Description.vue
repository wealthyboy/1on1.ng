<template>
  <div class="row border-top mt-5">
    <div class="col-md-6">

      <h1 class="mt-3">Description</h1>
      <p class="text-secondary" v-html="description"></p>
    </div>

    <div id="#sch" v-if="schedules" class="col-md-6 mt-3">
      <h1>Schedule</h1>
      <ul class="li text-secondary">
        <li class="text-secondary" v-for="schedule in schedules" :key="schedule.id"> Date: {{ schedule.starts_at }} - {{
          schedule.ends_at }} |
          Time: {{ schedule.start_time }} - {{ schedule.end_time }}</li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["description", "schedules"],
  setup() { },
};
</script>
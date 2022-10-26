<template>
  <div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventServices from '@/services/EventServices'

export default {
  data() {
    return {
      event: {},
      id: 123
    }
  },
  created() {
    EventServices.getEvent(this.id)
      .then(response => { this.event = response.data })
      .catch(error => { console.log(error) })
  }
}
</script>

export type BookingType = {
  id: string
  flightType: string
  timing: {
    label: string
    name: string
  }[]
  travelRoute: string
  icon: string
  cancelled?: boolean
}

export const upcomingBookingData: BookingType[] = [

]

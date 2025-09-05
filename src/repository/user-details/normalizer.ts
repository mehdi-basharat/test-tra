import type { NUserDetailsData, UserDetailsQueryType } from '@/model/user-details';

const normalizeUserDetails = (data?: UserDetailsQueryType | null) => {
  const dt = (data?.success && data.data) || {};

  const normalized = {
    id: dt.id ?? '',
    first_name: dt.first_name ?? '',
    last_name: dt.last_name ?? '',
    phone: dt.phone ?? '',
    username: dt.username ?? '',
    email: dt.email ?? '',
    photo: dt.photo ?? '',
    dob: dt.dob ?? '',
    country: dt.country ?? '',
    role_name: dt.role_name ?? '',
    role_id: dt.role_id ?? '',
    rating: dt.rating ?? '',
    review: dt.review ?? '',
    gender: dt.gender ?? '',
    status: dt.status ?? '',
  } satisfies NUserDetailsData;

  return normalized;
};

export default normalizeUserDetails;

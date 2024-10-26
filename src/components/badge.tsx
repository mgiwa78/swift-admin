import React from "react";
import {
  BadgeType,
  UserStatus,
  UserRole,
  BADGE_STYLES,
  PROPOSAL_STATUS,
  ERRAND_STATUS,
  PAYMENT_STATUS,
  SUBSCRIPTIONS_STATUS,
  TRANSACTION_TYPES,
  CustomerTypes,
} from "../constants/enums"; // Import your enums

type BadgeProps = {
  status: UserStatus | UserRole | PROPOSAL_STATUS | any;
  type: BadgeType;
};

// Options for User Status Badges
const USER_STATUS_OPTIONS: Record<
  UserStatus,
  { label: string; className: string }
> = {
  [UserStatus.Active]: {
    label: "Active",
    className: BADGE_STYLES.green100,
  },
  [UserStatus.Inactive]: {
    label: "Inactive",
    className: BADGE_STYLES.gray200,
  },
  [UserStatus.Pending]: {
    label: "Pending",
    className: BADGE_STYLES.orange100,
  },
};

// Options for User Role Badges
const USER_ROLE_OPTIONS: Record<
  UserRole,
  { label: string; className: string }
> = {
  [UserRole.Admin]: {
    label: "Admin",
    className: BADGE_STYLES.blue100,
  },
  [UserRole.Student]: {
    label: "Student",
    className: BADGE_STYLES.teal100,
  },
  [UserRole.Customer]: {
    label: "Customer",
    className: BADGE_STYLES.green200,
  },
  [UserRole.Supervisor]: {
    label: "Supervisor",
    className: BADGE_STYLES.yellow100,
  },
};
const CUSTOMER_TYPE_OPTIONS: Record<
  CustomerTypes,
  { label: string; className: string }
> = {
  [CustomerTypes.Receiver]: {
    label: "Receiver",
    className: BADGE_STYLES.teal100,
  },
  [CustomerTypes.Helper]: {
    label: "Helper",
    className: BADGE_STYLES.green200,
  },
};
// Options for User Role Badges
const PAYMENT_STATUS_OPTIONS: Record<
  PAYMENT_STATUS,
  { label: string; className: string }
> = {
  [PAYMENT_STATUS.Rejected]: {
    label: "Rejected",
    className: BADGE_STYLES.red200,
  },
  [PAYMENT_STATUS.Succeeded]: {
    label: "Succeeded",
    className: BADGE_STYLES.green300,
  },
  [PAYMENT_STATUS.Pending]: {
    label: "Pending",
    className: BADGE_STYLES.orange100,
  },
  [PAYMENT_STATUS.Failed]: {
    label: "Failed",
    className: BADGE_STYLES.red200,
  },
};
// Options for User Role Badges
const SUBSCRIPTIONS_STATUS_OPTIONS: Record<
  SUBSCRIPTIONS_STATUS,
  { label: string; className: string }
> = {
  [SUBSCRIPTIONS_STATUS.Rejected]: {
    label: "Rejected",
    className: BADGE_STYLES.red200,
  },
};

const TRANSACTION_TYPE_OPTIONS: Record<
  TRANSACTION_TYPES,
  { label: string; className: string }
> = {
  [TRANSACTION_TYPES.Credit]: {
    label: "Credit",
    className: BADGE_STYLES.green300,
  },
  [TRANSACTION_TYPES.Debit]: {
    label: "Debit",
    className: BADGE_STYLES.red500,
  },
};

const ERRAND_STATUS_OPTIONS: Record<
  ERRAND_STATUS,
  { label: string; className: string }
> = {
  [ERRAND_STATUS.Paid]: {
    label: "Paid",
    className: BADGE_STYLES.green200,
  },
  [ERRAND_STATUS.Unpaid]: {
    label: "Unpaid",
    className: BADGE_STYLES.orange100,
  },
  [ERRAND_STATUS.Requested]: {
    label: "Requested",
    className: BADGE_STYLES.blue100,
  },
  [ERRAND_STATUS.Completed]: {
    label: "Completed",
    className: BADGE_STYLES.green300,
  },
  [ERRAND_STATUS.Pending]: {
    label: "Pending",
    className: BADGE_STYLES.orange100,
  },
  [ERRAND_STATUS.Failed]: {
    label: "Failed",
    className: BADGE_STYLES.red200,
  },
  [ERRAND_STATUS.Cancelled]: {
    label: "Cancelled",
    className: BADGE_STYLES.orange100,
  },
  [ERRAND_STATUS["In-progress"]]: {
    label: "In-progress",
    className: BADGE_STYLES.purple100,
  },
};

// Badge Option Types Mapping
const BadgeOptions: any = {
  [BadgeType.UserStatus]: USER_STATUS_OPTIONS,
  [BadgeType.UserRole]: USER_ROLE_OPTIONS,
  [BadgeType.ErrandStatus]: ERRAND_STATUS_OPTIONS,
  [BadgeType.PaymentStatus]: PAYMENT_STATUS_OPTIONS,
  [BadgeType.CustomerType]: CUSTOMER_TYPE_OPTIONS,
  [BadgeType.SubscriptionStatus]: SUBSCRIPTIONS_STATUS,
};

export const Badge: React.FC<BadgeProps> = ({ status, type }) => {
  // Normalize status to lowercase to match keys
  const normalizedStatus = status?.toString()?.toLowerCase();
  console.log(status);
  // Get the correct badge options for the provided type
  const badgeOptions = BadgeOptions?.[type as BadgeType];
  const badge = badgeOptions?.[
    normalizedStatus as keyof typeof badgeOptions
  ] || {
    label: status,
    className: BADGE_STYLES.gray100,
  };
  return (
    <span
      className={`inline-flex badge  badge-xs items-center px-2.5 badge-outline py-0.5 text-2sm font-medium ${badge.className}`}
    >
      {badge.label || status}
    </span>
  );
};

export default Badge;

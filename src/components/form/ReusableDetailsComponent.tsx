import React from "react";

interface ReusableDetailsComponentProps {
  data: { [key: string]: any };
  title: string;
  onClose: any;
}

const ReusableDetailsComponent: React.FC<ReusableDetailsComponentProps> = ({
  data,
  title,
  onClose,
}) => {
  if (!data) return null;

  return (
    <div>
      <div
        className="modal open bg-[#000000df]"
        data-modal="true"
        role="dialog"
        tabIndex={-1}
        style={{
          zIndex: 90,
          display: "block",
        }}
        aria-modal={true}
      >
        <div className="modal-content max-w-[500px] top-[15%]">
          <div className="modal-header pr-2.5">
            <h3 className="modal-title">{title}</h3>
            <button
              className="btn btn-sm btn-icon btn-light btn-clear shrink-0"
              onClick={() => onClose()}
            >
              <i className="ki-filled ki-cross"></i>
            </button>
          </div>
          <div className="modal-body p-0">
            <div className="p-5">
              {Object.entries(data).map(([key, value]) => (
                <div
                  key={key}
                  className="details-item flex w-full justify-between capitalize"
                >
                  <strong className="details-label">{key}:</strong>
                  <span className="details-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableDetailsComponent;

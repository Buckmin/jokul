import React from "react";

interface Props {
    className?: string;
}

export const LogoStampDistributor = ({ className = "" }: Props) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.66669 682.66669">
        <g fill="currentColor">
            <path d="M603.413 204.532l-14.037 7.05 9.199 18.318-2.562 1.285-9.198-18.317-17.162 8.621-1.356-2.698 36.323-18.244 11.57 23.04-2.563 1.285-10.214-20.34M629.144 271.443l-2.99-11.644-17.211 4.42 2.988 11.641c1.689 6.58 5.67 9.635 11.277 8.196 5.608-1.439 7.624-6.033 5.936-12.613zm-17.827 10.089l-15.414 12.59-.82-3.207 14.761-12.122-3.567-13.89-16.766 4.304-.751-2.924 39.364-10.104 3.74 14.565c2.237 8.717-1.048 14.596-7.876 16.35-5.164 1.323-10.055-.898-12.67-5.562M636.176 331.285l-23.272-7.972.605 17.698zm-36.005 15.471l10.569-4.548-.681-19.9-10.854-3.693-.106-3.134 41.153 14.214.101 2.958-40.077 17.178-.105-3.075M588.095 428.71c-1.748-3.46-1.731-7.771-.319-12.317 1.393-4.492 4.021-7.93 7.568-9.684 2.63-1.31 5.78-1.792 8.824-1.15l-.932 2.994c-2.384-.437-4.865.008-6.861 1.028-2.791 1.444-4.846 4.392-5.863 7.663-1.05 3.381-1.223 7.035.132 9.827.883 1.794 2.399 3.297 4.861 4.064 3.724 1.156 7.867-.779 9.932-5.303l3.203-7.03c2.432-5.323 6.827-8.457 12.796-6.602 3.23 1.004 5.083 3.161 6.27 5.717 1.431 3.119 1.518 7.096.382 10.756-1.308 4.214-4.313 7.9-7.576 9.318-2.433 1.069-4.803 1.548-7.664.902l.912-2.938c2.057.334 3.725.185 5.6-.632 2.615-1.071 4.87-3.898 5.99-7.499.88-2.83 1.01-5.767-.03-8.216-.85-1.905-2.296-3.632-4.813-4.413-4.6-1.43-7.384 1.353-8.943 4.82l-3.236 7.141c-2.659 5.859-8.275 8.673-13.753 6.97-3.394-1.053-5.243-3.026-6.48-5.415M598.699 486.9l5.55-9.799-15.865-8.989-5.55 9.797c-2.977 5.256-2.814 10.551 2.725 13.69 5.538 3.137 10.165.554 13.14-4.699zm-18.36-10.403l5.55-9.801-14.52-8.227 1.487-2.625 35.376 20.043-7.039 12.426c-3.89 6.87-10.045 10.056-17.181 6.012-7.133-4.041-7.565-10.958-3.673-17.828M565.393 531.388l-11.613-21.692-11.612 13.372zm-36.909-13.204l10.839 3.875 13.058-15.038-5.432-10.096 2.055-2.366 20.457 38.44-1.941 2.234-41.053-14.724 2.017-2.325M518.712 576.35l9.61-7.217-10.675-14.209-9.61 7.216c-5.43 4.08-6.728 8.925-3.25 13.555 3.477 4.63 8.493 4.736 13.925.654zm-16.15-12.607l-17.533-9.42 2.647-1.986 16.852 8.998 11.467-8.613-10.399-13.842 2.413-1.813 24.414 32.5-12.026 9.03c-7.194 5.405-13.882 4.62-18.117-1.02-3.204-4.26-3.024-9.632.281-13.834M461.279 567.979l17.028 36.91-23.934 11.043-1.201-2.603 21.14-9.754-6.245-13.535-18.61 8.585-1.2-2.603 18.608-8.585-7.181-15.565-21.139 9.752-1.201-2.603 23.935-11.042M405.276 627.75l11.276-2.518-3.31-14.83-11.277 2.517c-5.552 1.24-9.569 3.488-8.158 9.813 1.236 5.539 6.597 6.105 11.469 5.017zm-3.933-17.629l11.274-2.517-3.697-16.565-11.275 2.517c-5.494 1.228-10.414 3.97-8.878 10.854 1.449 6.493 6.741 7.015 12.576 5.711zM387.56 595.81c2.377-2.94 5.904-4.197 9.473-4.996l14.222-3.174 8.854 39.676-14.22 3.177c-3.004.67-6.277.93-9.201-.18-2.924-1.108-5.172-3.72-5.835-6.687-.961-4.309.015-8.461 4.33-10.718-5.248-.062-8.458-3.518-9.468-8.05-.702-3.133-.254-6.464 1.845-9.048M345.15 633.221l8.506-23.09-17.704.204zm-14.633-36.358l4.3 10.673 19.91-.227 3.942-10.769 3.135-.035-15.157 40.828-2.962.034-16.244-40.467 3.076-.037M276.443 588.836l16.04 40.104 7.32-35.248 2.954.615-8.264 39.794-3.353-.698-16.108-40.06-7.307 35.191-2.9-.602 8.264-39.795 3.354.699M219.305 566.959l2.726 26.794 14.681-6.388 4.707-10.267 2.797 1.283-16.941 36.95-2.799-1.283 10.443-22.773-31.024 13.335-3.379-1.547 18.735-8.124-3.06-29.408 3.114 1.428M177.379 538.759l-22.812 28.236 12.389.644-2.019 2.5-12.829-.563-2.035-1.642 25.047-30.998 2.259 1.823M87.212 487.585c-.604 2.918.082 6.052 1.782 8.755 1.7 2.703 4.231 4.679 7.122 5.397 5.414 1.394 10.843-1.817 14.92-4.382 4.074-2.564 9.367-6.099 10.455-11.584.602-2.919-.085-6.054-1.784-8.756-1.702-2.703-4.231-4.678-7.122-5.398-5.415-1.392-10.893 1.848-14.97 4.412-4.074 2.566-9.32 6.071-10.403 11.556zm25.849-18.872c3.398.88 6.74 2.96 9.12 6.744 2.38 3.784 2.81 7.699 2.133 11.143-1.262 6.283-6.66 10.296-11.607 13.41-4.95 3.113-10.857 6.213-17.065 4.633-3.399-.88-6.741-2.962-9.123-6.744-2.379-3.784-2.811-7.699-2.133-11.144 1.262-6.282 6.612-10.266 11.56-13.38 4.948-3.112 10.904-6.243 17.115-4.662M92.746 413l-5.685 2.677c4.824.58 8.948 4.36 10.587 9.016 1.462 4.163 1.077 8.423-.456 11.667-2.594 5.59-8.599 8.561-14.062 10.484-5.517 1.939-11.88 3.376-17.473.603-3.247-1.628-6.303-4.615-7.768-8.778-2.811-7.996.077-15.165 6.483-18.034l1.022 2.902c-2.413 1.095-3.762 2.616-4.83 4.591-1.45 2.788-1.11 6.175.065 9.516s3.308 5.607 5.97 6.948c4.786 2.38 10.786.948 15.492-.707 4.652-1.636 10.497-4.368 12.616-9.234 1.213-2.764 1.298-5.811.182-8.988-1.099-3.123-3.31-5.607-5.764-6.711-4.343-1.983-8.985-.659-13.202.824l4.024 11.448-2.758.968-5.046-14.348 19.851-6.98.752 2.136M48.156 329.052c-1.974 2.067-3.1 5.072-3.137 8.148l-.129 10.623 34.804.424.127-10.623c.037-3.076-1.015-6.11-2.941-8.221-3.623-3.876-9.467-4.238-14.341-4.298-4.873-.058-10.725.162-14.383 3.947zm30.7-1.83c2.323 2.465 3.942 6.083 3.888 10.44l-.162 13.64-40.651-.497.164-13.641c.052-4.353 1.758-7.932 4.139-10.341 4.354-4.475 10.667-4.863 16.343-4.794 5.675.071 12.034.611 16.28 5.192M92.93 268.972l-40.686 14.513 34.955 8.652-.723 2.934-39.465-9.771.823-3.325 40.644-14.584-34.9-8.64.71-2.874 39.464 9.768-.821 3.327M93.752 215.277l-5.284 10.275 15.094 7.756 5.283-10.276c2.575-5.008 3.615-10.541-2.655-13.764-5.915-3.04-9.704.69-12.438 6.01zm-16.063-8.256l-5.282 10.276 13.512 6.944 5.284-10.276c2.6-5.058 3.446-9.585-2.316-12.546-5.049-2.594-8.915 1.164-11.198 5.602zm35.88 6.823c.74 3.707-.554 7.221-2.226 10.473l-6.664 12.96-36.152-18.58 6.664-12.958c1.407-2.736 3.3-5.418 6.026-6.955 2.724-1.539 6.17-1.596 8.873-.207 3.925 2.019 6.492 5.427 5.464 10.186 3.406-3.995 8.115-4.251 12.248-2.128 2.854 1.466 5.126 3.941 5.768 7.209M140.704 127.895l8.757 9.934 14.374-12.673 3.184 3.612-14.374 12.673 11.828 13.418-3.874 3.418-26.88-30.492 19.99-17.629 3.11 3.527-16.115 14.212M197.919 86.796l-9.559 5.387 7.01 12.438 9.558-5.385c4.248-2.393 6.325-5.801 3.793-10.3-2.534-4.495-6.553-4.533-10.802-2.14zm24.78 27.305l-15.08-10.92-9.914 5.587 8.304 14.739-4.501 2.536-19.956-35.419 14.059-7.924c4.197-2.364 7.78-2.87 10.877-1.983 2.733.831 5.14 2.502 6.887 5.599 1.744 3.096 1.914 5.765 1.208 8.532-.444 1.699-1.482 3.403-2.892 4.92l15.965 11.541-4.957 2.792M252.17 101.25l-11.982-38.84 26.3-8.117 1.385 4.492-21.361 6.592 3.65 11.835 18.753-5.788 1.421 4.601-18.755 5.787 4.14 13.424 21.36-6.595 1.387 4.495-26.299 8.115M339.021 85.637l-2.162-34.214-10.622 34.453-4.057.256-14.895-33.117 2.183 34.5-4.924.313-2.568-40.568 7.419-.47 14.489 32.226 10.255-33.797 7.244-.459 2.565 40.565-4.927.312M391.42 54.4l-5.713 35.436-5.158-.833 5.712-35.436-12.093-1.951.756-4.699 29.347 4.735-.759 4.696L391.42 54.4M421.833 98.736L434.751 60.2l5.01 1.679-12.918 38.537-5.01-1.68M476.673 123.69l-1.716-38.382-15.929 28.537-4.361-2.433 19.813-35.496 5.073 2.83 1.659 38.482 15.985-28.637 4.364 2.432-19.817 35.497-5.07-2.83M543.916 133.87c-.15-2.689-1.556-5.2-3.536-6.993l-6.8-6.161-20.97 23.164 6.8 6.159c1.98 1.792 4.618 2.945 7.307 2.828 4.604-.239 8.322-3.91 11.244-7.14 2.926-3.23 6.135-7.208 5.955-11.856zm-16.925 23.886c-3.999.092-7.767-1.544-10.736-4.232l-10.631-9.63 27.283-30.131 10.628 9.629c2.972 2.69 4.93 6.321 5.236 10.31.508 6.187-3.012 11.198-6.935 15.533-3.927 4.334-8.684 8.378-14.845 8.521M341.28 235.977L195.19 382.068l11.282 11.281 68.581-68.581 68.588 68.587 10.87-10.87-68.587-68.588 55.779-55.78 134.916 134.916 10.857-10.858L341.28 235.977" />
        </g>
    </svg>
);

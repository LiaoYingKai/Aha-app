import Button from "../../../components/Button";

export default function FollowItem({ avater, isFollowing, name, username }) {
  return (
    <div className="mb-5 flex w-full gap-4">
      <div className="round h-10 w-10">
        <img className="h-full w-full" src={avater} alt="avatar" />
      </div>
      <div className="flex-1">
        <p className="text-base">{name}</p>
        <p className="text-sm">@{username}</p>
      </div>
      {isFollowing ? (
        <Button size={Button.ButtonSize.SMALL} type={Button.ButtonType.CONTAINED}>
          Following
        </Button>
      ) : (
        <Button size={Button.ButtonSize.SMALL} type={Button.ButtonType.OUTLINED}>
          Follow
        </Button>
      )}
    </div>
  );
}

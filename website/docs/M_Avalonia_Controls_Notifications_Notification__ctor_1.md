# Notification(String, String, NotificationType, Nullable&lt;TimeSpan&gt;, Action, Action) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Notifications_Notification">Notification</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Notification(
	string? title,
	string? message,
	NotificationType type = NotificationType.Information,
	TimeSpan? expiration = null,
	Action? onClick = null,
	Action? onClose = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	title As String,
	message As String,
	Optional type As NotificationType = NotificationType.Information,
	Optional expiration As TimeSpan? = Nothing,
	Optional onClick As Action = Nothing,
	Optional onClose As Action = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        title : string * 
        message : string * 
        ?type : NotificationType * 
        ?expiration : Nullable<TimeSpan> * 
        ?onClick : Action * 
        ?onClose : Action 
(* Defaults:
        let _type = defaultArg type NotificationType.Information
        let _expiration = defaultArg expiration null
        let _onClick = defaultArg onClick null
        let _onClose = defaultArg onClose null
*)
-> Notification
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Notifications/Notification.cs#L29" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The title of the notification.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The message to be displayed in the notification.</dd><dt>  <a href="T_Avalonia_Controls_Notifications_NotificationType">NotificationType</a>  (Optional)</dt><dd>The <a href="T_Avalonia_Controls_Notifications_NotificationType">NotificationType</a> of the notification.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>)  (Optional)</dt><dd>The expiry time at which the notification will close. Use <a href="https://learn.microsoft.com/dotnet/api/system.timespan.zero" target="_blank" rel="noopener noreferrer">Zero</a> for notifications that will remain open.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>  (Optional)</dt><dd>An Action to call when the notification is clicked.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>  (Optional)</dt><dd>An Action to call when the notification is closed.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Notifications_Notification">Notification Class</a>  
<a href="Overload_Avalonia_Controls_Notifications_Notification__ctor">Notification Overload</a>  
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  


# Show(Object, NotificationType, Nullable&lt;TimeSpan&gt;, Action, Action, String[]) Method


Shows a Notification



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Show(
	Object content,
	NotificationType type,
	TimeSpan? expiration = null,
	Action? onClick = null,
	Action? onClose = null,
	string[]? classes = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Show ( 
	content As Object,
	type As NotificationType,
	Optional expiration As TimeSpan? = Nothing,
	Optional onClick As Action = Nothing,
	Optional onClose As Action = Nothing,
	Optional classes As String() = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Show : 
        content : Object * 
        type : NotificationType * 
        ?expiration : Nullable<TimeSpan> * 
        ?onClick : Action * 
        ?onClose : Action * 
        ?classes : string[] 
(* Defaults:
        let _expiration = defaultArg expiration null
        let _onClick = defaultArg onClick null
        let _onClose = defaultArg onClose null
        let _classes = defaultArg classes null
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Notifications/WindowNotificationManager.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>the content of the notification</dd><dt>  <a href="T_Avalonia_Controls_Notifications_NotificationType">NotificationType</a></dt><dd>the type of the notification</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>)  (Optional)</dt><dd>the expiration time of the notification after which it will automatically close. If the value is Zero then the notification will remain open until the user closes it</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>  (Optional)</dt><dd>an Action to be run when the notification is clicked</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>  (Optional)</dt><dd>an Action to be run when the notification is closed</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>[]  (Optional)</dt><dd>style classes to apply</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Notifications_WindowNotificationManager">WindowNotificationManager Class</a>  
<a href="Overload_Avalonia_Controls_Notifications_WindowNotificationManager_Show">Show Overload</a>  
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  


---
title:Show(Object, NotificationType, Nullable&lt;TimeSpan&gt;, Action, Action, String[]) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Show(Object, NotificationType, Nullable&lt;TimeSpan&gt;, Action, Action, String[]) Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public void Show(
	Object content,
	NotificationType type,
	TimeSpan? expiration = null,
	Action? onClick = null,
	Action? onClose = null,
	string[]? classes = null
)
```
**VB**
``` VB
Public Sub Show ( 
	content As Object,
	type As NotificationType,
	Optional expiration As TimeSpan? = Nothing,
	Optional onClick As Action = Nothing,
	Optional onClose As Action = Nothing,
	Optional classes As String() = Nothing
)
```
**F#**
``` F#
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



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_Notifications_NotificationType">NotificationType</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>[]  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Notifications_WindowNotificationManager">WindowNotificationManager Class</a>  
<a href="Overload_Avalonia_Controls_Notifications_WindowNotificationManager_Show">Show Overload</a>  
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  

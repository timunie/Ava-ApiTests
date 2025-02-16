---
title:Notification(String, String, NotificationType, Nullable&lt;TimeSpan&gt;, Action, Action) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Notification(String, String, NotificationType, Nullable&lt;TimeSpan&gt;, Action, Action) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Notifications_Notification">Notification</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public Notification(
	string? title,
	string? message,
	NotificationType type = NotificationType.Information,
	TimeSpan? expiration = null,
	Action? onClick = null,
	Action? onClose = null
)
```
**VB**
``` VB
Public Sub New ( 
	title As String,
	message As String,
	Optional type As NotificationType = NotificationType.Information,
	Optional expiration As TimeSpan? = Nothing,
	Optional onClick As Action = Nothing,
	Optional onClose As Action = Nothing
)
```
**F#**
``` F#
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



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_Notifications_NotificationType">NotificationType</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Notifications_Notification">Notification Class</a>  
<a href="Overload_Avalonia_Controls_Notifications_Notification__ctor">Notification Overload</a>  
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  

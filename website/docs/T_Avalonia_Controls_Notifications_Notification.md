import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Notification Class


A notification that can be shown in a window or by the host operating system.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Notification : INotification, 
	INotifyPropertyChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Notification
	Implements INotification, INotifyPropertyChanged
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Notification = 
    class
        interface INotification
        interface INotifyPropertyChanged
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Notification</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Notifications_INotification">INotification</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a></td></tr>
</table>

This class represents a notification that can be displayed either in a window using <a href="T_Avalonia_Controls_Notifications_WindowNotificationManager">WindowNotificationManager</a> or by the host operating system (to be implemented).

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Notifications_Notification__ctor">Notification()</a></td>
<td>Initializes a new instance of the Notification class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Notifications_Notification__ctor_1">Notification(String, String, NotificationType, Nullable(TimeSpan), Action, Action)</a></td>
<td>Initializes a new instance of the Notification class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_Notification_Expiration">Expiration</a></td>
<td>Gets the expiration time of the notification after which it will automatically close. If the value is <a href="https://learn.microsoft.com/dotnet/api/system.timespan.zero" target="_blank" rel="noopener noreferrer">Zero</a> then the notification will remain open until the user closes it.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_Notification_Message">Message</a></td>
<td>Gets the notification message.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_Notification_OnClick">OnClick</a></td>
<td>Gets an Action to be run when the notification is clicked.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_Notification_OnClose">OnClose</a></td>
<td>Gets an Action to be run when the notification is closed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_Notification_Title">Title</a></td>
<td>Gets the Title of the notification.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_Notification_Type">Type</a></td>
<td>Gets the <a href="T_Avalonia_Controls_Notifications_NotificationType">NotificationType</a> of the notification.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Notifications_Notification_OnPropertyChanged">OnPropertyChanged</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Notifications_Notification_PropertyChanged">PropertyChanged</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  

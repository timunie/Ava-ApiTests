# INotification Interface


Represents a notification that can be shown in a window or by the host operating system.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface INotification
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface INotification
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type INotification = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Notifications/INotification.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_INotification_Expiration">Expiration</a></td>
<td>Gets the expiration time of the notification after which it will automatically close. If the value is <a href="https://learn.microsoft.com/dotnet/api/system.timespan.zero" target="_blank" rel="noopener noreferrer">Zero</a> then the notification will remain open until the user closes it.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_INotification_Message">Message</a></td>
<td>Gets the notification message.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_INotification_OnClick">OnClick</a></td>
<td>Gets an Action to be run when the notification is clicked.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_INotification_OnClose">OnClose</a></td>
<td>Gets an Action to be run when the notification is closed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_INotification_Title">Title</a></td>
<td>Gets the Title of the notification.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Notifications_INotification_Type">Type</a></td>
<td>Gets the <a href="T_Avalonia_Controls_Notifications_NotificationType">NotificationType</a> of the notification.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  

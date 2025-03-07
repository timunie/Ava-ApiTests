# Expiration Property


Gets the expiration time of the notification after which it will automatically close. If the value is <a href="https://learn.microsoft.com/dotnet/api/system.timespan.zero" target="_blank" rel="noopener noreferrer">Zero</a> then the notification will remain open until the user closes it.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TimeSpan Expiration \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Expiration As TimeSpan
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Expiration : TimeSpan with get, set
override Expiration : TimeSpan with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Notifications/Notification.cs#L83" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>

#### Implements
<a href="P_Avalonia_Controls_Notifications_INotification_Expiration">INotification.Expiration</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Notifications_Notification">Notification Class</a>  
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  

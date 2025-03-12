# Expiration Property


Gets the expiration time of the notification after which it will automatically close. If the value is <a href="https://learn.microsoft.com/dotnet/api/system.timespan.zero" target="_blank" rel="noopener noreferrer">Zero</a> then the notification will remain open until the user closes it.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
TimeSpan Expiration { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property Expiration As TimeSpan
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Expiration : TimeSpan with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Notifications/INotification.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Notifications_INotification">INotification Interface</a>  
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  


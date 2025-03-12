# OnPropertyChanged Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnPropertyChanged(
	string? propertyName = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnPropertyChanged ( 
	Optional propertyName As String = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnPropertyChanged : 
        ?propertyName : string 
(* Defaults:
        let _propertyName = defaultArg propertyName null
*)
-> unit 
override OnPropertyChanged : 
        ?propertyName : string 
(* Defaults:
        let _propertyName = defaultArg propertyName null
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Notifications/Notification.cs#L95" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Notifications_Notification">Notification Class</a>  
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  


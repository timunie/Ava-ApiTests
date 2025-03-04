import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnPropertyChanged Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Notifications/Notification.cs#L94" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Notifications_Notification">Notification Class</a>  
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  

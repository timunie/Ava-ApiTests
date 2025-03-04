import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnSelectedDateChanged Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnSelectedDateChanged(
	Object? sender,
	DatePickerSelectedValueChangedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnSelectedDateChanged ( 
	sender As Object,
	e As DatePickerSelectedValueChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnSelectedDateChanged : 
        sender : Object * 
        e : DatePickerSelectedValueChangedEventArgs -> unit 
override OnSelectedDateChanged : 
        sender : Object * 
        e : DatePickerSelectedValueChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/DateTimePickers/DatePicker.cs#L411" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_DatePickerSelectedValueChangedEventArgs">DatePickerSelectedValueChangedEventArgs</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DatePicker">DatePicker Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

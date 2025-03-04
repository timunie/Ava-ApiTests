import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnPropertyChanged Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override void OnPropertyChanged(
	AvaloniaPropertyChangedEventArgs change
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Sub OnPropertyChanged ( 
	change As AvaloniaPropertyChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnPropertyChanged : 
        change : AvaloniaPropertyChangedEventArgs -> unit 
override OnPropertyChanged : 
        change : AvaloniaPropertyChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/DateTimePickers/TimePickerPresenter.cs#L196" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  AvaloniaPropertyChangedEventArgs</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TimePickerPresenter">TimePickerPresenter Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnValidSpinDirectionChanged Method


Called when valid spin direction changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnValidSpinDirectionChanged(
	ValidSpinDirections oldValue,
	ValidSpinDirections newValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnValidSpinDirectionChanged ( 
	oldValue As ValidSpinDirections,
	newValue As ValidSpinDirections
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnValidSpinDirectionChanged : 
        oldValue : ValidSpinDirections * 
        newValue : ValidSpinDirections -> unit 
override OnValidSpinDirectionChanged : 
        oldValue : ValidSpinDirections * 
        newValue : ValidSpinDirections -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Spinner.cs#L139" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_ValidSpinDirections">ValidSpinDirections</a></dt><dd>The old value.</dd><dt>  <a href="T_Avalonia_Controls_ValidSpinDirections">ValidSpinDirections</a></dt><dd>The new value.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Spinner">Spinner Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

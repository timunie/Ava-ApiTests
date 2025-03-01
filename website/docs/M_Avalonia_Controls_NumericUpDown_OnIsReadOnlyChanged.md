import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnIsReadOnlyChanged Method


Called when the <a href="P_Avalonia_Controls_NumericUpDown_IsReadOnly">IsReadOnly</a> property value changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnIsReadOnlyChanged(
	bool oldValue,
	bool newValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnIsReadOnlyChanged ( 
	oldValue As Boolean,
	newValue As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnIsReadOnlyChanged : 
        oldValue : bool * 
        newValue : bool -> unit 
override OnIsReadOnlyChanged : 
        oldValue : bool * 
        newValue : bool -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>The old value.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>The new value.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_NumericUpDown">NumericUpDown Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

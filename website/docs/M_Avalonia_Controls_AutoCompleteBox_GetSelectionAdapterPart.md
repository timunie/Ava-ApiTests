import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetSelectionAdapterPart Method


Returns the ISelectionAdapter part, if possible.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual ISelectionAdapter? GetSelectionAdapterPart(
	INameScope nameScope
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function GetSelectionAdapterPart ( 
	nameScope As INameScope
) As ISelectionAdapter
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetSelectionAdapterPart : 
        nameScope : INameScope -> ISelectionAdapter 
override GetSelectionAdapterPart : 
        nameScope : INameScope -> ISelectionAdapter 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/AutoCompleteBox/AutoCompleteBox.cs#L599" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  INameScope</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Utils_ISelectionAdapter">ISelectionAdapter</a>  
A ISelectionAdapter object, if possible. Otherwise, null.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

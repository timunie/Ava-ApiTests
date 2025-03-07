# GetSelectionAdapterPart Method


Returns the ISelectionAdapter part, if possible.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AutoCompleteBox/AutoCompleteBox.cs#L599" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_INameScope">INameScope</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Utils_ISelectionAdapter">ISelectionAdapter</a>  
A ISelectionAdapter object, if possible. Otherwise, null.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

# OnCoerceIsExpanded Method


Called when the <a href="P_Avalonia_Controls_Expander_IsExpanded">IsExpanded</a> property has to be coerced.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual bool OnCoerceIsExpanded(
	bool value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function OnCoerceIsExpanded ( 
	value As Boolean
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnCoerceIsExpanded : 
        value : bool -> bool 
override OnCoerceIsExpanded : 
        value : bool -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Expander.cs#L300" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>The value to coerce.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Expander">Expander Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


# OnCoerceIsPaneOpen Method


Called when the <a href="P_Avalonia_Controls_SplitView_IsPaneOpen">IsPaneOpen</a> property has to be coerced.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual bool OnCoerceIsPaneOpen(
	bool value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function OnCoerceIsPaneOpen ( 
	value As Boolean
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnCoerceIsPaneOpen : 
        value : bool -> bool 
override OnCoerceIsPaneOpen : 
        value : bool -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/SplitView/SplitView.cs#L475" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>The value to coerce.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_SplitView">SplitView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

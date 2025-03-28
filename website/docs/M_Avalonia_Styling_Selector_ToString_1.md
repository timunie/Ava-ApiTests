# ToString(Style) Method


Gets a string representing the selector, with the nesting separator (`^`) replaced with the parent selector.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract string ToString(
	Style? owner
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride Function ToString ( 
	owner As Style
) As String
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ToString : 
        owner : Style -> string 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Selector.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Styling_Style">Style</a></dt><dd>The owner style.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>

## See Also


#### Reference
<a href="T_Avalonia_Styling_Selector">Selector Class</a>  
<a href="Overload_Avalonia_Styling_Selector_ToString">ToString Overload</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  


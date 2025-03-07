# ContainsExclusive Method


Determines whether a point is in the bounds of the rounded rectangle, exclusive of the rounded rectangle's bottom/right edge.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool ContainsExclusive(
	Point p
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ContainsExclusive ( 
	p As Point
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ContainsExclusive : 
        p : Point -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/RoundedRect.cs#L169" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if the point is in the bounds of the rounded rectangle; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_RoundedRect">RoundedRect Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

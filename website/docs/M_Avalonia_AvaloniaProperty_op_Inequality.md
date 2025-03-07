# Inequality Operator


Tests two <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>s for inequality.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool operator !=(
	AvaloniaProperty? a,
	AvaloniaProperty? b
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator <> ( 
	a As AvaloniaProperty,
	b As AvaloniaProperty
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (<>)
        a : AvaloniaProperty * 
        b : AvaloniaProperty  : bool
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaProperty.cs#L225" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The first property.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The second property.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the properties are equal, otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

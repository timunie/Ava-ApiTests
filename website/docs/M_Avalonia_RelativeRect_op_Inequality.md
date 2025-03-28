# Inequality Operator


Checks for inequality between two <a href="T_Avalonia_RelativeRect">RelativeRect</a>s.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool operator !=(
	RelativeRect left,
	RelativeRect right
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator <> ( 
	left As RelativeRect,
	right As RelativeRect
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (<>)
        left : RelativeRect * 
        right : RelativeRect  : bool
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/RelativeRect.cs#L108" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_RelativeRect">RelativeRect</a></dt><dd>The first rectangle.</dd><dt>  <a href="T_Avalonia_RelativeRect">RelativeRect</a></dt><dd>The second rectangle.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the rectangles are unequal; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_RelativeRect">RelativeRect Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  


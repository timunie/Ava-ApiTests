# IsZero(Double) Method


IsZero - Returns whether or not the double is "close" to 0. Same as AreClose(double, 0), but this is faster.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool IsZero(
	double value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function IsZero ( 
	value As Double
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member IsZero : 
        value : float -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/MathUtilities.cs#L190" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The double to compare to 0.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Utilities_MathUtilities">MathUtilities Class</a>  
<a href="Overload_Avalonia_Utilities_MathUtilities_IsZero">IsZero Overload</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

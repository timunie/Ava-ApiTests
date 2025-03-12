# AreClose(Double, Double, Double) Method


AreClose - Returns whether or not two doubles are "close". That is, whether or not they are within epsilon of each other.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool AreClose(
	double value1,
	double value2,
	double eps
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function AreClose ( 
	value1 As Double,
	value2 As Double,
	eps As Double
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member AreClose : 
        value1 : float * 
        value2 : float * 
        eps : float -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/MathUtilities.cs#L48" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The first double to compare.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The second double to compare.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The fixed epsilon value used to compare.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Utilities_MathUtilities">MathUtilities Class</a>  
<a href="Overload_Avalonia_Utilities_MathUtilities_AreClose">AreClose Overload</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  


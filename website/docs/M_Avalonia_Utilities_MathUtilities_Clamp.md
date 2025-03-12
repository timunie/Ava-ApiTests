# Clamp(Decimal, Decimal, Decimal) Method


Clamps a value between a minimum and maximum value.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static decimal Clamp(
	decimal val,
	decimal min,
	decimal max
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Clamp ( 
	val As Decimal,
	min As Decimal,
	max As Decimal
) As Decimal
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Clamp : 
        val : decimal * 
        min : decimal * 
        max : decimal -> decimal 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/MathUtilities.cs#L241" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a></dt><dd>The value.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a></dt><dd>The minimum value.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a></dt><dd>The maximum value.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a>  
The clamped value.

## See Also


#### Reference
<a href="T_Avalonia_Utilities_MathUtilities">MathUtilities Class</a>  
<a href="Overload_Avalonia_Utilities_MathUtilities_Clamp">Clamp Overload</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  


# Deconstruct Method


Deconstructor the thickness into its left, top, right and bottom thickness values.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Deconstruct(
	out double left,
	out double top,
	out double right,
	out double bottom
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Deconstruct ( 
	<OutAttribute> ByRef left As Double,
	<OutAttribute> ByRef top As Double,
	<OutAttribute> ByRef right As Double,
	<OutAttribute> ByRef bottom As Double
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Deconstruct : 
        left : float byref * 
        top : float byref * 
        right : float byref * 
        bottom : float byref -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Thickness.cs#L280" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The thickness on the left.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The thickness on the top.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The thickness on the right.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The thickness on the bottom.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Thickness">Thickness Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  


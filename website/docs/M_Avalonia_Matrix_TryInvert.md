# TryInvert Method


Attempts to invert the Matrix.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryInvert(
	out Matrix inverted
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryInvert ( 
	<OutAttribute> ByRef inverted As Matrix
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryInvert : 
        inverted : Matrix byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Matrix.cs#L439" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Matrix">Matrix</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
The inverted matrix or null when matrix is not invertible.

## See Also


#### Reference
<a href="T_Avalonia_Matrix">Matrix Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

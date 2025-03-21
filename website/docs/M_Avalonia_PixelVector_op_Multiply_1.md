# Multiply(PixelVector, Int32) Operator


Scales a vector.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static PixelVector operator *(
	PixelVector vector,
	int scale
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator * ( 
	vector As PixelVector,
	scale As Integer
) As PixelVector
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (*)
        vector : PixelVector * 
        scale : int  : PixelVector
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelVector.cs#L71" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelVector">PixelVector</a></dt><dd>The vector</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The scaling factor.</dd></dl>

#### Return Value
<a href="T_Avalonia_PixelVector">PixelVector</a>  
The scaled vector.

## See Also


#### Reference
<a href="T_Avalonia_PixelVector">PixelVector Structure</a>  
<a href="Overload_Avalonia_PixelVector_op_Multiply">Multiply Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  


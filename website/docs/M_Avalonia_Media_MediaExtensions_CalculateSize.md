# CalculateSize Method


Calculates a scaled size based on a <a href="T_Avalonia_Media_Stretch">Stretch</a> value.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Size CalculateSize(
	this Stretch stretch,
	Size destinationSize,
	Size sourceSize,
	StretchDirection stretchDirection = StretchDirection.Both
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function CalculateSize ( 
	stretch As Stretch,
	destinationSize As Size,
	sourceSize As Size,
	Optional stretchDirection As StretchDirection = StretchDirection.Both
) As Size
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member CalculateSize : 
        stretch : Stretch * 
        destinationSize : Size * 
        sourceSize : Size * 
        ?stretchDirection : StretchDirection 
(* Defaults:
        let _stretchDirection = defaultArg stretchDirection StretchDirection.Both
*)
-> Size 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/MediaExtensions.cs#L114" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Stretch">Stretch</a></dt><dd>The stretch mode.</dd><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The size of the destination viewport.</dd><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The size of the source.</dd><dt>  <a href="T_Avalonia_Media_StretchDirection">StretchDirection</a>  (Optional)</dt><dd>The stretch direction.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The size of the stretched source.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Media_Stretch">Stretch</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_MediaExtensions">MediaExtensions Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  


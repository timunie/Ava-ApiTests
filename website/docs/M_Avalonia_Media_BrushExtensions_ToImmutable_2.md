# ToImmutable(IPen) Method


Converts a pen to an immutable pen.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static ImmutablePen ToImmutable(
	this IPen pen
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function ToImmutable ( 
	pen As IPen
) As ImmutablePen
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member ToImmutable : 
        pen : IPen -> ImmutablePen 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/BrushExtensions.cs#L51" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IPen">IPen</a></dt><dd>The pen.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_Immutable_ImmutablePen">ImmutablePen</a>  
The result of calling <a href="M_Avalonia_Media_Pen_ToImmutable">ToImmutable()</a> if the brush is mutable, otherwise *pen*.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Media_IPen">IPen</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_BrushExtensions">BrushExtensions Class</a>  
<a href="Overload_Avalonia_Media_BrushExtensions_ToImmutable">ToImmutable Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  


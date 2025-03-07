# ToImmutable(IBrush) Method


Converts a brush to an immutable brush.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IImmutableBrush ToImmutable(
	this IBrush brush
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function ToImmutable ( 
	brush As IBrush
) As IImmutableBrush
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member ToImmutable : 
        brush : IBrush -> IImmutableBrush 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/BrushExtensions.cs#L20" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a></dt><dd>The brush.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_IImmutableBrush">IImmutableBrush</a>  
The result of calling ToImmutable() if the brush is mutable, otherwise *brush*.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Media_IBrush">IBrush</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_BrushExtensions">BrushExtensions Class</a>  
<a href="Overload_Avalonia_Media_BrushExtensions_ToImmutable">ToImmutable Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

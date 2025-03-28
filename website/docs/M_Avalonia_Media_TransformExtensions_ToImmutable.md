# ToImmutable Method


Converts a transform to an immutable transform.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static ImmutableTransform ToImmutable(
	this ITransform transform
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function ToImmutable ( 
	transform As ITransform
) As ImmutableTransform
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member ToImmutable : 
        transform : ITransform -> ImmutableTransform 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TransformExtensions.cs#L21" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_ITransform">ITransform</a></dt><dd>The transform.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_Immutable_ImmutableTransform">ImmutableTransform</a>  
The result of calling <a href="M_Avalonia_Media_Transform_ToImmutable">ToImmutable()</a> if the transform is mutable, otherwise *transform*.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Media_ITransform">ITransform</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_TransformExtensions">TransformExtensions Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  


# TryGetLocalPath Method


Gets the local file system path of the item as a string.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static string? TryGetLocalPath(
	this IStorageItem item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function TryGetLocalPath ( 
	item As IStorageItem
) As String
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member TryGetLocalPath : 
        item : IStorageItem -> string 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/StorageProviderExtensions.cs#L56" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a></dt><dd>Storage folder or file.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
Full local path to the folder or file if possible, otherwise null.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.Android platform usually uses "content:" virtual file paths and Browser platform has isolated access without full paths, so on these platforms this method will return null.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_StorageProviderExtensions">StorageProviderExtensions Class</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

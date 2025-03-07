# Match Method


Checks whether this plugin handles the specified value.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool Match(
	WeakReference<Object?> reference
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function Match ( 
	reference As WeakReference(Of Object)
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Match : 
        reference : WeakReference<Object> -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/IStreamPlugin.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.weakreference-1" target="_blank" rel="noopener noreferrer">WeakReference</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>A weak reference to the value.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the plugin can handle the value; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_Plugins_IStreamPlugin">IStreamPlugin Interface</a>  
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  

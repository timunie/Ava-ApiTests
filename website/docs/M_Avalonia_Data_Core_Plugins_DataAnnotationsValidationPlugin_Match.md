# Match Method


Checks whether this plugin can handle data validation on the specified object.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool Match(
	WeakReference<Object?> reference,
	string memberName
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Match ( 
	reference As WeakReference(Of Object),
	memberName As String
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Match : 
        reference : WeakReference<Object> * 
        memberName : string -> bool 
override Match : 
        reference : WeakReference<Object> * 
        memberName : string -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/DataAnnotationsValidationPlugin.cs#L19" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.weakreference-1" target="_blank" rel="noopener noreferrer">WeakReference</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>A weak reference to the object.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The name of the member to validate.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the plugin can handle the object; otherwise false.

#### Implements
<a href="M_Avalonia_Data_Core_Plugins_IDataValidationPlugin_Match">IDataValidationPlugin.Match(WeakReference(Object), String)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Data_Core_Plugins_DataAnnotationsValidationPlugin">DataAnnotationsValidationPlugin Class</a>  
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  


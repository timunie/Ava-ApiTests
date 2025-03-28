# Start Method


Starts monitoring the data validation state of a property on an object.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IPropertyAccessor Start(
	WeakReference<Object?> reference,
	string name,
	IPropertyAccessor accessor
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Start ( 
	reference As WeakReference(Of Object),
	name As String,
	accessor As IPropertyAccessor
) As IPropertyAccessor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Start : 
        reference : WeakReference<Object> * 
        name : string * 
        accessor : IPropertyAccessor -> IPropertyAccessor 
override Start : 
        reference : WeakReference<Object> * 
        name : string * 
        accessor : IPropertyAccessor -> IPropertyAccessor 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/IndeiValidationPlugin.cs#L31" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.weakreference-1" target="_blank" rel="noopener noreferrer">WeakReference</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>A weak reference to the object.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a>  
An <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a> interface through which future interactions with the property will be made.

#### Implements
<a href="M_Avalonia_Data_Core_Plugins_IDataValidationPlugin_Start">IDataValidationPlugin.Start(WeakReference(Object), String, IPropertyAccessor)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Data_Core_Plugins_IndeiValidationPlugin">IndeiValidationPlugin Class</a>  
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  


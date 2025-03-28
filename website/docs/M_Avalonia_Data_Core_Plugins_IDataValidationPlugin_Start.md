# Start Method


Starts monitoring the data validation state of a property on an object.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IPropertyAccessor Start(
	WeakReference<Object?> reference,
	string propertyName,
	IPropertyAccessor inner
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function Start ( 
	reference As WeakReference(Of Object),
	propertyName As String,
	inner As IPropertyAccessor
) As IPropertyAccessor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Start : 
        reference : WeakReference<Object> * 
        propertyName : string * 
        inner : IPropertyAccessor -> IPropertyAccessor 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/IDataValidationPlugin.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.weakreference-1" target="_blank" rel="noopener noreferrer">WeakReference</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>A weak reference to the object.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The property name.</dd><dt>  <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a></dt><dd>The inner property accessor used to access the property.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a>  
An <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a> interface through which future interactions with the property will be made.

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_Plugins_IDataValidationPlugin">IDataValidationPlugin Interface</a>  
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  


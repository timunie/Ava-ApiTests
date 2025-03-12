# Start Method


Starts producing output based on the specified value.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IObservable<Object?> Start(
	WeakReference<Object?> reference
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function Start ( 
	reference As WeakReference(Of Object)
) As IObservable(Of Object)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Start : 
        reference : WeakReference<Object> -> IObservable<Object> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/IStreamPlugin.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.weakreference-1" target="_blank" rel="noopener noreferrer">WeakReference</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>A weak reference to the object.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)  
An observable that produces the output for the value.

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_Plugins_IStreamPlugin">IStreamPlugin Interface</a>  
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  


# CueTypeConverter Class




## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class CueTypeConverter : TypeConverter
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class CueTypeConverter
	Inherits TypeConverter
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type CueTypeConverter = 
    class
        inherit TypeConverter
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/Cue.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>  →  CueTypeConverter</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Animation_CueTypeConverter__ctor">CueTypeConverter()</a></td>
<td>Initializes a new instance of the CueTypeConverter class</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.canconvertfrom#system-componentmodel-typeconverter-canconvertfrom(system-type)" target="_blank" rel="noopener noreferrer">CanConvertFrom(Type)</a></td>
<td>Returns whether this converter can convert an object of the given type to the type of this converter.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_CueTypeConverter_CanConvertFrom">CanConvertFrom(ITypeDescriptorContext, Type)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.canconvertfrom#system-componentmodel-typeconverter-canconvertfrom(system-componentmodel-itypedescriptorcontext-system-type)" target="_blank" rel="noopener noreferrer">TypeConverter.CanConvertFrom(ITypeDescriptorContext, Type)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.canconvertto#system-componentmodel-typeconverter-canconvertto(system-type)" target="_blank" rel="noopener noreferrer">CanConvertTo(Type)</a></td>
<td>Returns whether this converter can convert the object to the specified type.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.canconvertto#system-componentmodel-typeconverter-canconvertto(system-componentmodel-itypedescriptorcontext-system-type)" target="_blank" rel="noopener noreferrer">CanConvertTo(ITypeDescriptorContext, Type)</a></td>
<td>Returns whether this converter can convert the object to the specified type, using the specified context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.convertfrom#system-componentmodel-typeconverter-convertfrom(system-object)" target="_blank" rel="noopener noreferrer">ConvertFrom(Object)</a></td>
<td>Converts the given value to the type of this converter.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_CueTypeConverter_ConvertFrom">ConvertFrom(ITypeDescriptorContext, CultureInfo, Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.convertfrom#system-componentmodel-typeconverter-convertfrom(system-componentmodel-itypedescriptorcontext-system-globalization-cultureinfo-system-object)" target="_blank" rel="noopener noreferrer">TypeConverter.ConvertFrom(ITypeDescriptorContext, CultureInfo, Object)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.convertfrominvariantstring#system-componentmodel-typeconverter-convertfrominvariantstring(system-string)" target="_blank" rel="noopener noreferrer">ConvertFromInvariantString(String)</a></td>
<td>Converts the given string to the type of this converter, using the invariant culture.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.convertfrominvariantstring#system-componentmodel-typeconverter-convertfrominvariantstring(system-componentmodel-itypedescriptorcontext-system-string)" target="_blank" rel="noopener noreferrer">ConvertFromInvariantString(ITypeDescriptorContext, String)</a></td>
<td>Converts the given string to the type of this converter, using the invariant culture and the specified context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.convertfromstring#system-componentmodel-typeconverter-convertfromstring(system-string)" target="_blank" rel="noopener noreferrer">ConvertFromString(String)</a></td>
<td>Converts the specified text to an object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.convertfromstring#system-componentmodel-typeconverter-convertfromstring(system-componentmodel-itypedescriptorcontext-system-string)" target="_blank" rel="noopener noreferrer">ConvertFromString(ITypeDescriptorContext, String)</a></td>
<td>Converts the given text to an object, using the specified context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.convertfromstring#system-componentmodel-typeconverter-convertfromstring(system-componentmodel-itypedescriptorcontext-system-globalization-cultureinfo-system-string)" target="_blank" rel="noopener noreferrer">ConvertFromString(ITypeDescriptorContext, CultureInfo, String)</a></td>
<td>Converts the given text to an object, using the specified context and culture information.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.convertto#system-componentmodel-typeconverter-convertto(system-object-system-type)" target="_blank" rel="noopener noreferrer">ConvertTo(Object, Type)</a></td>
<td>Converts the given value object to the specified type, using the arguments.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.convertto#system-componentmodel-typeconverter-convertto(system-componentmodel-itypedescriptorcontext-system-globalization-cultureinfo-system-object-system-type)" target="_blank" rel="noopener noreferrer">ConvertTo(ITypeDescriptorContext, CultureInfo, Object, Type)</a></td>
<td>Converts the given value object to the specified type, using the specified context and culture information.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.converttoinvariantstring#system-componentmodel-typeconverter-converttoinvariantstring(system-object)" target="_blank" rel="noopener noreferrer">ConvertToInvariantString(Object)</a></td>
<td>Converts the specified value to a culture-invariant string representation.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.converttoinvariantstring#system-componentmodel-typeconverter-converttoinvariantstring(system-componentmodel-itypedescriptorcontext-system-object)" target="_blank" rel="noopener noreferrer">ConvertToInvariantString(ITypeDescriptorContext, Object)</a></td>
<td>Converts the specified value to a culture-invariant string representation, using the specified context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.converttostring#system-componentmodel-typeconverter-converttostring(system-object)" target="_blank" rel="noopener noreferrer">ConvertToString(Object)</a></td>
<td>Converts the specified value to a string representation.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.converttostring#system-componentmodel-typeconverter-converttostring(system-componentmodel-itypedescriptorcontext-system-object)" target="_blank" rel="noopener noreferrer">ConvertToString(ITypeDescriptorContext, Object)</a></td>
<td>Converts the given value to a string representation, using the given context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.converttostring#system-componentmodel-typeconverter-converttostring(system-componentmodel-itypedescriptorcontext-system-globalization-cultureinfo-system-object)" target="_blank" rel="noopener noreferrer">ConvertToString(ITypeDescriptorContext, CultureInfo, Object)</a></td>
<td>Converts the given value to a string representation, using the specified context and culture information.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.createinstance#system-componentmodel-typeconverter-createinstance(system-collections-idictionary)" target="_blank" rel="noopener noreferrer">CreateInstance(IDictionary)</a></td>
<td>Re-creates an <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a> given a set of property values for the object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.createinstance#system-componentmodel-typeconverter-createinstance(system-componentmodel-itypedescriptorcontext-system-collections-idictionary)" target="_blank" rel="noopener noreferrer">CreateInstance(ITypeDescriptorContext, IDictionary)</a></td>
<td>Creates an instance of the type that this <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a> is associated with, using the specified context, given a set of property values for the object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getconvertfromexception" target="_blank" rel="noopener noreferrer">GetConvertFromException(Object)</a></td>
<td>Returns an exception to throw when a conversion cannot be performed.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getconverttoexception" target="_blank" rel="noopener noreferrer">GetConvertToException(Object, Type)</a></td>
<td>Returns an exception to throw when a conversion cannot be performed.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getcreateinstancesupported#system-componentmodel-typeconverter-getcreateinstancesupported" target="_blank" rel="noopener noreferrer">GetCreateInstanceSupported()</a></td>
<td>Returns whether changing a value on this object requires a call to the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.createinstance#system-componentmodel-typeconverter-createinstance(system-collections-idictionary)" target="_blank" rel="noopener noreferrer">CreateInstance(IDictionary)</a> method to create a new value.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getcreateinstancesupported#system-componentmodel-typeconverter-getcreateinstancesupported(system-componentmodel-itypedescriptorcontext)" target="_blank" rel="noopener noreferrer">GetCreateInstanceSupported(ITypeDescriptorContext)</a></td>
<td>Returns whether changing a value on this object requires a call to <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.createinstance#system-componentmodel-typeconverter-createinstance(system-collections-idictionary)" target="_blank" rel="noopener noreferrer">CreateInstance(IDictionary)</a> to create a new value, using the specified context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getproperties#system-componentmodel-typeconverter-getproperties(system-object)" target="_blank" rel="noopener noreferrer">GetProperties(Object)</a></td>
<td>Returns a collection of properties for the type of array specified by the value parameter.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getproperties#system-componentmodel-typeconverter-getproperties(system-componentmodel-itypedescriptorcontext-system-object)" target="_blank" rel="noopener noreferrer">GetProperties(ITypeDescriptorContext, Object)</a></td>
<td>Returns a collection of properties for the type of array specified by the value parameter, using the specified context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getproperties#system-componentmodel-typeconverter-getproperties(system-componentmodel-itypedescriptorcontext-system-object-system-attribute())" target="_blank" rel="noopener noreferrer">GetProperties(ITypeDescriptorContext, Object, Attribute[])</a></td>
<td>Returns a collection of properties for the type of array specified by the value parameter, using the specified context and attributes.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getpropertiessupported#system-componentmodel-typeconverter-getpropertiessupported" target="_blank" rel="noopener noreferrer">GetPropertiesSupported()</a></td>
<td>Returns whether this object supports properties.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getpropertiessupported#system-componentmodel-typeconverter-getpropertiessupported(system-componentmodel-itypedescriptorcontext)" target="_blank" rel="noopener noreferrer">GetPropertiesSupported(ITypeDescriptorContext)</a></td>
<td>Returns whether this object supports properties, using the specified context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getstandardvalues#system-componentmodel-typeconverter-getstandardvalues" target="_blank" rel="noopener noreferrer">GetStandardValues()</a></td>
<td>Returns a collection of standard values from the default context for the data type this type converter is designed for.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getstandardvalues#system-componentmodel-typeconverter-getstandardvalues(system-componentmodel-itypedescriptorcontext)" target="_blank" rel="noopener noreferrer">GetStandardValues(ITypeDescriptorContext)</a></td>
<td>Returns a collection of standard values for the data type this type converter is designed for when provided with a format context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getstandardvaluesexclusive#system-componentmodel-typeconverter-getstandardvaluesexclusive" target="_blank" rel="noopener noreferrer">GetStandardValuesExclusive()</a></td>
<td>Returns whether the collection of standard values returned from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getstandardvalues#system-componentmodel-typeconverter-getstandardvalues" target="_blank" rel="noopener noreferrer">GetStandardValues()</a> is an exclusive list.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getstandardvaluesexclusive#system-componentmodel-typeconverter-getstandardvaluesexclusive(system-componentmodel-itypedescriptorcontext)" target="_blank" rel="noopener noreferrer">GetStandardValuesExclusive(ITypeDescriptorContext)</a></td>
<td>Returns whether the collection of standard values returned from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getstandardvalues#system-componentmodel-typeconverter-getstandardvalues" target="_blank" rel="noopener noreferrer">GetStandardValues()</a> is an exclusive list of possible values, using the specified context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getstandardvaluessupported#system-componentmodel-typeconverter-getstandardvaluessupported" target="_blank" rel="noopener noreferrer">GetStandardValuesSupported()</a></td>
<td>Returns whether this object supports a standard set of values that can be picked from a list.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.getstandardvaluessupported#system-componentmodel-typeconverter-getstandardvaluessupported(system-componentmodel-itypedescriptorcontext)" target="_blank" rel="noopener noreferrer">GetStandardValuesSupported(ITypeDescriptorContext)</a></td>
<td>Returns whether this object supports a standard set of values that can be picked from a list, using the specified context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.isvalid#system-componentmodel-typeconverter-isvalid(system-object)" target="_blank" rel="noopener noreferrer">IsValid(Object)</a></td>
<td>Returns whether the given value object is valid for this type.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.isvalid#system-componentmodel-typeconverter-isvalid(system-componentmodel-itypedescriptorcontext-system-object)" target="_blank" rel="noopener noreferrer">IsValid(ITypeDescriptorContext, Object)</a></td>
<td>Returns whether the given value object is valid for this type and for the specified context.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter.sortproperties" target="_blank" rel="noopener noreferrer">SortProperties(PropertyDescriptorCollection, String[])</a></td>
<td>Sorts a collection of properties.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter" target="_blank" rel="noopener noreferrer">TypeConverter</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  

